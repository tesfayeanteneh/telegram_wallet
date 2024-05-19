package com.yourapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.widget.Toast;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    private static final int OVERLAY_PERMISSION_REQ_CODE = 1234;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            } else {
                startOverlayService();
            }
        } else {
            startOverlayService();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Settings.canDrawOverlays(this)) {
                startOverlayService();
            } else {
                Toast.makeText(this, "Overlay permission is required to use this feature", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void startOverlayService() {
        startService(new Intent(MainActivity.this, OverlayService.class));
    }

    @Override
    protected String getMainComponentName() {
        return "YourApp";
    }
}
