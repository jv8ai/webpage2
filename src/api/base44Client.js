import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68b8983846c1dd206b86384a", 
  requiresAuth: true // Ensure authentication is required for all operations
});
