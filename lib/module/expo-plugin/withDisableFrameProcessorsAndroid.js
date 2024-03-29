import { withGradleProperties } from '@expo/config-plugins';

/**
 * Set the `VisionCamera_disableFrameProcessors` value in the static `gradle.properties` file.
 * This is used to disable frame processors if you don't need it for android.
 */
export const withDisableFrameProcessorsAndroid = c => {
  const disableFrameProcessorsKey = 'VisionCamera_disableFrameProcessors';
  return withGradleProperties(c, config => {
    config.modResults = config.modResults.filter(item => {
      if (item.type === 'property' && item.key === disableFrameProcessorsKey) return false;
      return true;
    });
    config.modResults.push({
      type: 'property',
      key: disableFrameProcessorsKey,
      value: 'true'
    });
    return config;
  });
};
//# sourceMappingURL=withDisableFrameProcessorsAndroid.js.map