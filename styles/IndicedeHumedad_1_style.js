var size = 0;
var placement = 'point';

var style_IndicedeHumedad_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NDMI");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -0.138303 && value <= -0.017466) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.017466 && value <= 0.103372) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.103372 && value <= 0.224209) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.224209 && value <= 0.345046) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.345046 && value <= 0.465884) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
