"use client";

export const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        {/* Animated Logo/Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="ml-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Meet AI
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your intelligent conversation partner, always ready to connect
          </p>
        </div>

        {/* Main Graphic */}
        <div className="relative w-full max-w-4xl mb-16">
          <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">
                    Experience the Future of Conversation
                  </h2>
                  <p className="text-blue-100">
                    Meet AI brings you natural, intelligent interactions powered
                    by cutting-edge artificial intelligence.
                  </p>
                  <div className="flex space-x-4">
                    <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                    <div className="text-sm text-gray-300">
                      AI system active and ready
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-2 bg-blue-500/30 rounded-xl blur"></div>
                  <div className="relative bg-gray-900 rounded-xl p-6 h-64 overflow-hidden">
                    {/* Neural Network Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Nodes */}
                      <div className="relative w-full h-full">
                        {[20, 50, 80].map((yPos, layer) => (
                          <div
                            key={layer}
                            className="absolute left-1/2"
                            style={{ top: `${yPos}%` }}
                          >
                            {[...Array(5)].map((_, i) => {
                              const xPos = 10 + i * 20;
                              return (
                                <div
                                  key={i}
                                  className="absolute w-3 h-3 rounded-full bg-blue-400 animate-pulse"
                                  style={{
                                    left: `${xPos}%`,
                                    animationDelay: `${i * 0.2}s`,
                                  }}
                                ></div>
                              );
                            })}
                          </div>
                        ))}

                        {/* Connections */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {[...Array(5)].map((_, i) => {
                            const x1 = 10 + i * 20;
                            return (
                              <g key={i}>
                                {/* Connections between layers */}
                                {[...Array(5)].map((_, j) => {
                                  const x2 = 10 + j * 20;
                                  return (
                                    <line
                                      key={j}
                                      x1={`${x1}%`}
                                      y1="20%"
                                      x2={`${x2}%`}
                                      y2="50%"
                                      stroke="rgba(96, 165, 250, 0.3)"
                                      strokeWidth="0.5"
                                    />
                                  );
                                })}
                                {[...Array(5)].map((_, j) => {
                                  const x2 = 10 + j * 20;
                                  return (
                                    <line
                                      key={j}
                                      x1={`${x1}%`}
                                      y1="50%"
                                      x2={`${x2}%`}
                                      y2="80%"
                                      stroke="rgba(96, 165, 250, 0.3)"
                                      strokeWidth="0.5"
                                    />
                                  );
                                })}
                              </g>
                            );
                          })}
                        </svg>
                      </div>

                      {/* Conversation bubbles */}
                      <div className="absolute bottom-4 left-4">
                        <div className="relative mb-2">
                          <div className="bg-blue-600 text-white px-3 py-2 rounded-lg rounded-bl-none max-w-xs animate-float-up">
                            Hello! How can I help you today?
                          </div>
                        </div>
                        <div className="relative">
                          <div className="bg-gray-700 text-white px-3 py-2 rounded-lg rounded-br-none max-w-xs ml-8 animate-float-up-delay">
                            Tell me about AI...
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-700"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-700 transform rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20"
              style={{
                width: Math.random() * 10 + 2 + "px",
                height: Math.random() * 10 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + "s",
              }}
            ></div>
          ))}
        </div>

        {/* Subtle Footer */}
        <div className="mt-auto pt-16 text-center text-sm text-blue-200/50">
          <p>Meet AI • Next-generation conversational interface</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(20px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float-up-delay {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          50% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-float-up {
          animation: float-up 0.5s ease-out forwards;
        }

        .animate-float-up-delay {
          animation: float-up-delay 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
