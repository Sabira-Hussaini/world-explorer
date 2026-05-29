export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      
 
      <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <p className="mt-6 text-lg font-medium text-gray-600">
        Loading countries...
      </p>

     
      <p className="text-sm text-gray-400 mt-2">
        Please wait while we fetch the latest data
      </p>
    </div>
  );
}