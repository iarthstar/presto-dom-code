# Presto-Dom-Gen

A Sketch plugin that copies selected layers to the clipboard as code that can be pasted straight into a UI .purs file.

- Copy one or more layers
- Layers are copied in position
- Text, group and rectangle layers are turned entirely in code
- Image layers too are generated and exported @3x


## Install
Download or clone the repository, and double click `Presto-Dom-Gen.sketchplugin`.


## What layer types can the plugin handle?


### Rectangles
Here is an example of the code that will be generated when you select a rectangle showing the full set of properties that can be generated:
```
linearLayout
  [ height $ V 100 
  , width $ V 200
  , background "#FF18294E"
  , stroke "1,#FFFFFFFF"
  , cornerRadius 4
  ][]
```

### Text
Text is copied as a native text layer:
```
textView
  [ height $ V 19 
  , width $ V 235
  , text "There’s a lot to share with others…"
  , fontStyle "Gilroy-Medium"
  , textSize 16
  , color "#9B9B9B"
  , letterSpacing (-0.33)
  ]
```

### Groups
Groups are copied as native linearLayout:
```
linearLayout
  [ height $ V 300
  , width $ V 400
  ][]
```


## What layer styles can the plugin handle?
- Opacity
- Background
- Border
- CornerRadius
- FontStyle, FontSize, FontWeight
- Height, Width
- Gravity
- ImageUrl
- Text
- Kerning


## How include image assets
When the design of a layer cannot be represented using native code you will need to use an image asset:  

```
imageView
  [ height $ V 200 
  , width $ V 200
  , imageUrl "avatar"
  ]
```

**Here’s how**:

1. Select the layer in Sketch and press 'CMD SHIFT P'

2. Enter the ImageUrl and press ok, it will be used to generate the asset naming and in generation imageView -> imageUrl.
