import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.amom.app',
  appName: 'A Map Of Memories',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
