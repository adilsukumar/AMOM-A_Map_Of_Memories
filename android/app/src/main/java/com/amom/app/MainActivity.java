package com.amom.app;

import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebView;
import androidx.core.splashscreen.SplashScreen;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // 1. Handle the splash screen transition
        SplashScreen.installSplashScreen(this);
        
        super.onCreate(savedInstanceState);

        // 2. Force WebView background to white and ensure visibility
        // This prevents the "Black Screen" on some API 33+ devices/emulators
        if (this.bridge != null && this.bridge.getWebView() != null) {
            WebView webView = this.bridge.getWebView();
            webView.setBackgroundColor(Color.WHITE);
            // Sometimes software rendering is needed on emulators to show the content
            webView.setLayerType(WebView.LAYER_TYPE_SOFTWARE, null);
        }
    }
}
