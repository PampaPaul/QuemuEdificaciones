var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZonaQuemQuem_1 = new ol.format.GeoJSON();
var features_ZonaQuemQuem_1 = format_ZonaQuemQuem_1.readFeatures(json_ZonaQuemQuem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaQuemQuem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaQuemQuem_1.addFeatures(features_ZonaQuemQuem_1);
var lyr_ZonaQuemQuem_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonaQuemQuem_1, 
                style: style_ZonaQuemQuem_1,
                interactive: true,
                title: '<img src="styles/legend/ZonaQuemQuem_1.png" /> Zona Quemú Quemú'
            });
var format_AreasEdificadas_2 = new ol.format.GeoJSON();
var features_AreasEdificadas_2 = format_AreasEdificadas_2.readFeatures(json_AreasEdificadas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasEdificadas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasEdificadas_2.addFeatures(features_AreasEdificadas_2);
var lyr_AreasEdificadas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreasEdificadas_2, 
                style: style_AreasEdificadas_2,
                interactive: true,
                title: '<img src="styles/legend/AreasEdificadas_2.png" /> Areas Edificadas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ZonaQuemQuem_1.setVisible(true);lyr_AreasEdificadas_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ZonaQuemQuem_1,lyr_AreasEdificadas_2];
lyr_ZonaQuemQuem_1.set('fieldAliases', {'id': 'id', 'Edificacio': 'Edificacio', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_AreasEdificadas_2.set('fieldAliases', {'fid': 'fid', 'Area Edificada': 'Area Edificada', });
lyr_ZonaQuemQuem_1.set('fieldImages', {'id': 'TextEdit', 'Edificacio': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_AreasEdificadas_2.set('fieldImages', {'fid': 'TextEdit', 'Area Edificada': 'TextEdit', });
lyr_ZonaQuemQuem_1.set('fieldLabels', {'id': 'inline label', 'Edificacio': 'inline label', 'auxiliary_storage_labeling_lineanchorpercent': 'header label', 'auxiliary_storage_labeling_lineanchorclipping': 'header label', 'auxiliary_storage_labeling_lineanchortype': 'header label', 'auxiliary_storage_labeling_lineanchortextpoint': 'header label', });
lyr_AreasEdificadas_2.set('fieldLabels', {'fid': 'no label', 'Area Edificada': 'inline label', });
lyr_AreasEdificadas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});