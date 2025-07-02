import { auth } from "@/lib/auth";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UpgradeView } from "@/modules/premium/ui/views/upgrade-view";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queryClient = getQueryClient();

  try {
    // Prefetch data that will be used by the client component
    await Promise.all([
      queryClient.prefetchQuery(
        trpc.premium.getCurrentSubscription.queryOptions()
      ),
      queryClient.prefetchQuery(trpc.premium.getProducts.queryOptions()),
    ]);
  } catch (error) {
    console.error("Prefetching failed:", error);
    // Continue rendering - the client component will handle the loading state
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex-1 py-4 px-4 md:px-8">
        {/* No Suspense needed since loading is handled client-side */}
        <UpgradeView />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
