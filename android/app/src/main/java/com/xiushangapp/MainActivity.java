package com.xiushangapp;

import com.facebook.react.ReactActivity;
import com.mgUmeng.module.UConfigure;

import android.content.Intent;
import android.util.Log;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "xiushangApp";
  }


  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    Log.i("--react-native-share--","===========================MainActivity onActivityResult===========================" );

    super.onActivityResult(requestCode, resultCode, data);
    UConfigure.onActivityResult(this,requestCode, resultCode, data);
  }

  @Override
  protected void onDestroy(){
    super.onDestroy();
    //防止内存泄露
    UConfigure.release(this);
  }

}
