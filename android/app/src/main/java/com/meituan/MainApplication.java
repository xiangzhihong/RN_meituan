package com.meituan;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
=======
import com.oblador.vectoricons.VectorIconsPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.cmcewen.blurview.BlurViewPackage;
>>>>>>> 9f65954d6b618105b8e9c19ffa5f2ad8ceb1f7de
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
<<<<<<< HEAD
          new MainReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
=======
          new MainReactPackage(),
            new VectorIconsPackage(),
            new RCTCameraPackage(),
            new BlurViewPackage()
      );
    }
>>>>>>> 9f65954d6b618105b8e9c19ffa5f2ad8ceb1f7de
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
