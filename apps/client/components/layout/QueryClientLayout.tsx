"use client"

import {PropsWithChildren} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5분 동안 fresh 상태 유지
      gcTime: 10 * 60 * 1000,        // 10분 동안 캐시 유지
      refetchOnWindowFocus: false,   // 윈도우 포커스 시 재요청 안함
      retry: 1,                       // 실패 시 1번만 재시도
    }
  }
})

export function QueryClientLayout({children}: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}