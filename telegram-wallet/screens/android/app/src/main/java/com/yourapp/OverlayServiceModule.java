package com.yourapp;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OverlayServiceModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    OverlayServiceModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "OverlayService";
    }

    @ReactMethod
    public void startService() {
        Intent serviceIntent = new Intent(reactContext, OverlayService.class);
        reactContext.startService(serviceIntent);
    }

    @ReactMethod
    public void stopService() {
        Intent serviceIntent = new Intent(reactContext, OverlayService.class);
        reactContext.stopService(serviceIntent);
    }
}
