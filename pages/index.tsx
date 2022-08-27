import SkeletonLayout from '@layouts/skeleton';

export default function Index() {
  return (
    <SkeletonLayout>
      <div className="w-screen h-screen grid place-items-center">
        <h1 className="text-5xl font-bold">Hello World 🎉</h1>
      </div>
    </SkeletonLayout>
  );
}
