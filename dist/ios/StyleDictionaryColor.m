
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 09 Nov 2021 18:39:44 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.925f green:0.925f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.165f green:0.165f blue:0.165f alpha:1.000f],
[UIColor colorWithRed:0.294f green:0.294f blue:0.294f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.149f blue:0.149f alpha:0.600f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.247f green:0.255f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.345f blue:0.349f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.506f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.871f green:0.875f blue:0.875f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.200f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.200f blue:0.204f alpha:0.302f],
[UIColor colorWithRed:0.871f green:0.875f blue:0.875f alpha:0.302f],
[UIColor colorWithRed:0.463f green:0.463f blue:0.463f alpha:0.502f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.141f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.122f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.200f],
[UIColor colorWithRed:0.051f green:0.051f blue:0.051f alpha:0.302f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.125f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.506f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.502f],
[UIColor colorWithRed:0.596f green:0.600f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.518f green:0.502f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.627f green:0.620f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.925f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.498f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.863f green:0.871f blue:0.875f alpha:1.000f],
[UIColor colorWithRed:0.435f green:0.451f blue:0.435f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.812f blue:0.816f alpha:1.000f],
[UIColor colorWithRed:0.690f green:0.698f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.690f green:0.698f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.831f green:0.835f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.212f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.404f green:0.412f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.247f green:0.251f blue:0.251f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.243f blue:0.247f alpha:1.000f],
[UIColor colorWithRed:0.408f green:0.412f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:0.671f green:0.675f blue:0.678f alpha:1.000f],
[UIColor colorWithRed:0.898f green:0.902f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.373f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.220f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.165f blue:0.016f alpha:1.000f],
[UIColor colorWithRed:0.341f green:0.051f blue:0.004f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.702f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.686f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.392f green:0.271f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.929f blue:0.380f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.910f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.847f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.333f green:0.286f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.965f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.941f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.886f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.345f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.886f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.800f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.800f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.133f green:0.298f blue:0.345f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.839f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.655f blue:0.678f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.604f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.212f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.478f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.314f green:0.169f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.200f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:0.784f green:0.063f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.549f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.910f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.816f green:0.957f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.631f green:0.914f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.439f green:0.867f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.243f green:0.824f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.780f blue:0.796f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.624f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.467f blue:0.478f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.318f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.157f blue:0.157f alpha:1.000f],
[UIColor colorWithRed:0.894f green:0.886f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.788f green:0.773f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.682f green:0.659f blue:0.898f alpha:1.000f],
[UIColor colorWithRed:0.576f green:0.545f blue:0.859f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.427f blue:0.827f alpha:1.000f],
[UIColor colorWithRed:0.376f green:0.345f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.282f green:0.255f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.188f green:0.173f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.082f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.808f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.855f green:0.612f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.416f blue:0.855f alpha:1.000f],
[UIColor colorWithRed:0.710f green:0.204f blue:0.808f alpha:1.000f],
[UIColor colorWithRed:0.635f green:0.000f blue:0.757f alpha:1.000f],
[UIColor colorWithRed:0.506f green:0.000f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.380f green:0.000f blue:0.455f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.000f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.125f green:0.008f blue:0.153f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.867f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.729f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.596f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:0.886f green:0.459f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.855f green:0.325f blue:0.035f alpha:1.000f],
[UIColor colorWithRed:0.686f green:0.259f blue:0.039f alpha:1.000f],
[UIColor colorWithRed:0.514f green:0.196f blue:0.035f alpha:1.000f],
[UIColor colorWithRed:0.341f green:0.129f blue:0.031f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.067f blue:0.020f alpha:1.000f],
[UIColor colorWithRed:0.796f green:0.871f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:0.596f green:0.741f blue:0.827f alpha:1.000f],
[UIColor colorWithRed:0.392f green:0.612f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.184f green:0.478f blue:0.655f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.353f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.282f blue:0.447f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.212f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.141f blue:0.224f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.071f blue:0.110f alpha:1.000f],
[UIColor colorWithRed:0.855f green:0.933f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.718f green:0.863f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.796f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.729f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.675f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.227f green:0.529f blue:0.812f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.396f blue:0.608f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.263f blue:0.404f alpha:1.000f],
[UIColor colorWithRed:0.055f green:0.133f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.831f green:0.847f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.663f green:0.698f blue:0.737f alpha:1.000f],
[UIColor colorWithRed:0.494f green:0.549f blue:0.608f alpha:1.000f],
[UIColor colorWithRed:0.322f green:0.400f blue:0.478f alpha:1.000f],
[UIColor colorWithRed:0.153f green:0.251f blue:0.349f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.200f blue:0.278f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.149f blue:0.208f alpha:1.000f],
[UIColor colorWithRed:0.063f green:0.098f blue:0.137f alpha:1.000f],
[UIColor colorWithRed:0.031f green:0.047f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.965f blue:0.976f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.933f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.882f green:0.902f blue:0.937f alpha:1.000f],
[UIColor colorWithRed:0.843f green:0.871f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.839f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.643f green:0.671f blue:0.714f alpha:1.000f],
[UIColor colorWithRed:0.482f green:0.502f blue:0.537f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.333f blue:0.357f alpha:1.000f],
[UIColor colorWithRed:0.161f green:0.165f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.176f blue:0.243f alpha:1.000f],
[UIColor colorWithRed:0.510f green:0.506f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.110f green:0.247f blue:0.369f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.914f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.063f green:0.098f blue:0.137f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.176f blue:0.243f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.831f green:0.847f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:0.600f],
[UIColor colorWithRed:0.031f green:0.047f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.675f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.227f green:0.529f blue:0.812f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.396f blue:0.608f alpha:1.000f],
[UIColor colorWithRed:0.110f green:0.247f blue:0.369f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.796f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.796f blue:1.000f alpha:0.302f],
[UIColor colorWithRed:0.110f green:0.247f blue:0.369f alpha:0.302f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.502f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.251f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.122f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.200f],
[UIColor colorWithRed:0.031f green:0.047f blue:0.067f alpha:0.302f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.149f blue:0.208f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.675f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.220f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.702f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.910f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.941f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.800f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.655f blue:0.678f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.655f blue:0.678f alpha:0.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.000f],
[UIColor colorWithRed:1.000f green:0.373f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.929f blue:0.380f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.965f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.886f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.800f blue:1.000f alpha:0.000f],
[UIColor colorWithRed:0.808f green:0.839f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.478f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.314f green:0.169f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.200f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:0.784f green:0.063f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.549f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.910f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.933f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.161f green:0.165f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.333f blue:0.357f alpha:1.000f],
[UIColor colorWithRed:0.161f green:0.165f blue:0.176f alpha:0.600f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.353f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.184f green:0.478f blue:0.655f alpha:1.000f],
[UIColor colorWithRed:0.392f green:0.612f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.914f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.282f blue:0.447f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.282f blue:0.447f alpha:0.302f],
[UIColor colorWithRed:0.808f green:0.914f blue:0.988f alpha:0.302f],
[UIColor colorWithRed:0.510f green:0.506f blue:0.506f alpha:0.502f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.141f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.122f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.200f],
[UIColor colorWithRed:0.031f green:0.047f blue:0.067f alpha:0.302f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.149f blue:0.208f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.675f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.165f blue:0.016f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.686f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.847f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.886f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.800f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.604f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.212f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.502f],
[UIColor colorWithRed:1.000f green:0.373f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.929f blue:0.380f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.965f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.886f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.800f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.839f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.478f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.314f green:0.169f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.200f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:0.784f green:0.063f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.549f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.910f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.925f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.165f green:0.165f blue:0.165f alpha:1.000f],
[UIColor colorWithRed:0.294f green:0.294f blue:0.294f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.149f blue:0.149f alpha:0.600f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.247f green:0.255f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.345f blue:0.349f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.506f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.871f green:0.875f blue:0.875f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.200f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.200f blue:0.204f alpha:0.302f],
[UIColor colorWithRed:0.871f green:0.875f blue:0.875f alpha:0.302f],
[UIColor colorWithRed:0.463f green:0.463f blue:0.463f alpha:0.502f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.141f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.122f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.200f],
[UIColor colorWithRed:0.051f green:0.051f blue:0.051f alpha:0.302f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.125f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.506f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.502f],
[UIColor colorWithRed:0.596f green:0.600f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.518f green:0.502f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.627f green:0.620f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.925f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.498f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.863f green:0.871f blue:0.875f alpha:1.000f],
[UIColor colorWithRed:0.435f green:0.451f blue:0.435f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.812f blue:0.816f alpha:1.000f],
[UIColor colorWithRed:0.690f green:0.698f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.690f green:0.698f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.831f green:0.835f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.404f green:0.412f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.247f green:0.251f blue:0.251f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.243f blue:0.247f alpha:1.000f],
[UIColor colorWithRed:0.408f green:0.412f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:0.671f green:0.675f blue:0.678f alpha:1.000f],
[UIColor colorWithRed:0.898f green:0.902f blue:0.906f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
