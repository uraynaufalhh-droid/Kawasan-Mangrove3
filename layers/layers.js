var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KerapatanVegetasiMangroveMempawahHilir_1 = new ol.format.GeoJSON();
var features_KerapatanVegetasiMangroveMempawahHilir_1 = format_KerapatanVegetasiMangroveMempawahHilir_1.readFeatures(json_KerapatanVegetasiMangroveMempawahHilir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerapatanVegetasiMangroveMempawahHilir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerapatanVegetasiMangroveMempawahHilir_1.addFeatures(features_KerapatanVegetasiMangroveMempawahHilir_1);
var lyr_KerapatanVegetasiMangroveMempawahHilir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerapatanVegetasiMangroveMempawahHilir_1, 
                style: style_KerapatanVegetasiMangroveMempawahHilir_1,
                popuplayertitle: 'Kerapatan Vegetasi Mangrove Mempawah Hilir',
                interactive: true,
    title: 'Kerapatan Vegetasi Mangrove Mempawah Hilir<br />\
    <img src="styles/legend/KerapatanVegetasiMangroveMempawahHilir_1_0.png" /> Jarang<br />\
    <img src="styles/legend/KerapatanVegetasiMangroveMempawahHilir_1_1.png" /> Rapat<br />\
    <img src="styles/legend/KerapatanVegetasiMangroveMempawahHilir_1_2.png" /> Sedang<br />\
    <img src="styles/legend/KerapatanVegetasiMangroveMempawahHilir_1_3.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KerapatanVegetasiMangroveMempawahHilir_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KerapatanVegetasiMangroveMempawahHilir_1];
lyr_KerapatanVegetasiMangroveMempawahHilir_1.set('fieldAliases', {'FID_NDVI_F': 'FID_NDVI_F', 'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', 'Luas_Ha': 'Luas_Ha', 'FID_Admin_': 'FID_Admin_', 'WADMKC': 'WADMKC', 'Luas_Ha_1': 'Luas_Ha_1', });
lyr_KerapatanVegetasiMangroveMempawahHilir_1.set('fieldImages', {'FID_NDVI_F': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', 'Luas_Ha': 'TextEdit', 'FID_Admin_': 'TextEdit', 'WADMKC': 'TextEdit', 'Luas_Ha_1': 'TextEdit', });
lyr_KerapatanVegetasiMangroveMempawahHilir_1.set('fieldLabels', {'FID_NDVI_F': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Keterangan': 'inline label - always visible', 'Luas_Ha': 'no label', 'FID_Admin_': 'no label', 'WADMKC': 'no label', 'Luas_Ha_1': 'no label', });
lyr_KerapatanVegetasiMangroveMempawahHilir_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});