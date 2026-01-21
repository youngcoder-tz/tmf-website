// app/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-16 w-16 text-blue-600 animate-spin" />
          </div>
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-4 border-blue-100"></div>
          </div>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
          <Skeleton className="h-4 w-56 mx-auto" />
        </div>

        {/* Page skeleton */}
        <div className="mt-12 space-y-8 max-w-4xl mx-auto">
          <Skeleton className="h-12 w-full" />
          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
          </div>
          <Skeleton className="h-96 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
