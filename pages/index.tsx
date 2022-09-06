import SkeletonLayout from '@layouts/skeleton';

export default function Index() {
  return (
    <SkeletonLayout>
      <div className="w-screen h-screen grid place-items-center">
        <h1 className="text-5xl font-bold">Something new is coming soon 🎉</h1>
      </div>
    </SkeletonLayout>
  );
}
