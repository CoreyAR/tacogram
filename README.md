# Tacogram


##### Steps for manually adding `react-native-image-picker` to project
### iOS
1. Copy files
```
$ cp react-native-image-picker/ios/ImagePickerManager.h tacogram/ios/ImagePickerManager.h

$ cp react-native-image-picker/ios/ImagePickerManager.m tacogram/ios/ImagePickerManager.m 
```

### Android
1. Copy files
```
$ cp -r react-native-image-picker/android/src/main/java/com/imagepicker tacogram/android/app/src/main/java/com/tacogram/imagepicker
```