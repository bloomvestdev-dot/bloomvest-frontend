'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ErrorBoundary from '@/components/ErrorBoundary';

// Component that can throw errors for testing
function ErrorProneComponent({ shouldError }: { shouldError: boolean }) {
  if (shouldError) {
    throw new Error('Test error: This is a simulated component error!');
  }

  return (
    <div className="p-4 bg-green-100 border border-green-300 rounded">
      <p className="text-green-800">✅ Component is working fine!</p>
    </div>
  );
}

// Test component to demonstrate error handling
export default function ErrorTestComponent() {
  const [shouldError, setShouldError] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Error Handling Test</h3>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button 
            onClick={() => setShouldError(false)}
            variant={!shouldError ? "default" : "outline"}
            size="sm"
          >
            Normal Mode
          </Button>
          <Button 
            onClick={() => setShouldError(true)}
            variant={shouldError ? "destructive" : "outline"}
            size="sm"
          >
            Trigger Error
          </Button>
        </div>

        <ErrorBoundary>
          <ErrorProneComponent shouldError={shouldError} />
        </ErrorBoundary>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Click "Trigger Error" to see how the error boundary catches and displays errors gracefully.
      </p>
    </div>
  );
}
