# Tacogram


##### Steps for manually adding `react-native-image-picker` to project
### iOS
1. Copy files
```
$ cp ~/react-native-image-picker/ios/ImagePickerManager.h ~/tacogram/ios/ImagePickerManager.h

$ cp ~/react-native-image-picker/ios/ImagePickerManager.m ~/tacogram/ios/ImagePickerManager.m 
```

2. Link files to XCode project
Secondary click on tacogram project and select 'Add new files to "tacogram"..' and select ImagePickerManager.h and ImagePickerManager.m

3. The ImagePickerManager is now accessible from NativeModules but you will get and error "'Actions added to UIAlertController must have a title' was thrown while invoking showImagePicker on target ImagePickerManager ..."

This is because options keys 'cancelButtonTitle', 'takePhotoButtonTitle', 'chooseFromLibraryButtonTitle' no longer have default values. Add those keys to your options object.

4. The final step is add Camera, and Photo Media permissions to Info.plist. (Privacy - Photo Library Usage Description and Privacy - Camera Usage Description)

### Android
1. Copy files
```
$ cp -r ~/react-native-image-picker/android/src/main/java/com/imagepicker ~/tacogram/android/app/src/main/java/com/tacogram/imagepicker
cp -r ~/react-native-image-picker/android/src/main/res/layout/ ~/tacogram/android/app/src/main/res/layout
cp -r ~/react-native-image-picker/android/src/main/res/layout/themes.xml ~/tacogram/android/app/src/main/res/values/themes.xml
```
2. Fix File Paths
Most of the files paths com.imagepicker will be changed to com.tacogram.imagepicker because the files now live inside the tacogram package. 
`error: cannot find symbol import com.imagepicker.R;` refers to the Resource file for package. 'R' gives you access to the XML defined in AndroidManifest.xml. That path should be `com.tacogram.R`.

3. Register the package

```
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new ImagePickerPackage(),
        ...
    );
  }
};
```

4. Add Permission to Android.Manifest.xml
```
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```