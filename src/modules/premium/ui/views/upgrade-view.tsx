"use client";

import { useQuery } from "@tanstack/react-query"; // Changed from useSuspenseQuery
import { useTRPC } from "@/trpc/client";
import { authClient } from "@/lib/auth-client";
import { ErrorState } from "@/components/error-state";
import { PricingCard } from "../components/pricing-card";
import { Skeleton } from "@/components/ui/skeleton"; // Add skeleton loading components

export const UpgradeView = () => {
  const trpc = useTRPC();

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery(trpc.premium.getProducts.queryOptions());

  const {
    data: currentSubscription,
    isLoading: subscriptionLoading,
    error: subscriptionError,
  } = useQuery(trpc.premium.getCurrentSubscription.queryOptions());

  if (productsError || subscriptionError) {
    return (
      <ErrorState title="Error" description="Failed to load upgrade view" />
    );
  }

  if (productsLoading || subscriptionLoading) {
    return (
      <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-10">
        <div className="mt-4 flex-1 flex flex-col gap-y-10 items-center">
          <Skeleton className="h-8 w-64" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-96 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-10">
      <div className="mt-4 flex-1 flex flex-col gap-y-10 items-center">
        <h5 className="font-medium text-2xl md:text-3xl">
          You are on the{" "}
          <span className="font-semibold text-primary">
            {currentSubscription?.name ?? "Free"}
          </span>{" "}
          plan
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products?.map((product) => {
            const isCurrentProduct = currentSubscription?.id === product.id;
            const isPremium = !!currentSubscription;

            let buttonText = "Upgrade";
            let onClick = () => authClient.checkout({ products: [product.id] });

            if (isCurrentProduct) {
              buttonText = "Manage";
              onClick = () => authClient.customer.portal();
            } else if (isPremium) {
              buttonText = "Change Plan";
              onClick = () => authClient.customer.portal();
            }

            return (
              <PricingCard
                key={product.id}
                buttonText={buttonText}
                onClick={onClick}
                variant={
                  product.metadata.variant === "highlighted"
                    ? "highlighted"
                    : "default"
                }
                title={product.name}
                price={
                  product.prices[0].amountType === "fixed"
                    ? product.prices[0].priceAmount / 100
                    : 0
                }
                description={product.description}
                priceSuffix={`/${product.prices[0].recurringInterval}`}
                features={product.benefits.map(
                  (benefit) => benefit.description
                )}
                badge={product.metadata.badge as string | null}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Remove UpgradeViewLoading since we handle loading state inline
export const UpgradeViewError = () => {
  return <ErrorState title="Error" description="Failed to load upgrade view" />;
};
