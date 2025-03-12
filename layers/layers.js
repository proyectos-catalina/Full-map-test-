var wms_layers = [];


        var lyr_CMPCPlantaSantaFe_0 = new ol.layer.Tile({
            'title': 'CMPC Planta Santa Fe',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AreasPlantaSantaFe_1 = new ol.format.GeoJSON();
var features_AreasPlantaSantaFe_1 = format_AreasPlantaSantaFe_1.readFeatures(json_AreasPlantaSantaFe_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasPlantaSantaFe_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasPlantaSantaFe_1.addFeatures(features_AreasPlantaSantaFe_1);
var lyr_AreasPlantaSantaFe_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasPlantaSantaFe_1, 
                style: style_AreasPlantaSantaFe_1,
                popuplayertitle: 'Areas Planta Santa Fe ',
                interactive: true,
                title: '<img src="styles/legend/AreasPlantaSantaFe_1.png" /> Areas Planta Santa Fe '
            });
var format_CaminatageneralCMPC_2 = new ol.format.GeoJSON();
var features_CaminatageneralCMPC_2 = format_CaminatageneralCMPC_2.readFeatures(json_CaminatageneralCMPC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminatageneralCMPC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminatageneralCMPC_2.addFeatures(features_CaminatageneralCMPC_2);
var lyr_CaminatageneralCMPC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminatageneralCMPC_2, 
                style: style_CaminatageneralCMPC_2,
                popuplayertitle: 'Caminata general CMPC',
                interactive: false,
                title: '<img src="styles/legend/CaminatageneralCMPC_2.png" /> Caminata general CMPC'
            });
var format_PuntosreferenciaRutaRiles_3 = new ol.format.GeoJSON();
var features_PuntosreferenciaRutaRiles_3 = format_PuntosreferenciaRutaRiles_3.readFeatures(json_PuntosreferenciaRutaRiles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosreferenciaRutaRiles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosreferenciaRutaRiles_3.addFeatures(features_PuntosreferenciaRutaRiles_3);
var lyr_PuntosreferenciaRutaRiles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosreferenciaRutaRiles_3, 
                style: style_PuntosreferenciaRutaRiles_3,
                popuplayertitle: 'Puntos referencia Ruta Riles',
                interactive: true,
                title: '<img src="styles/legend/PuntosreferenciaRutaRiles_3.png" /> Puntos referencia Ruta Riles'
            });
var format_puntosreferenciaRutaagua_4 = new ol.format.GeoJSON();
var features_puntosreferenciaRutaagua_4 = format_puntosreferenciaRutaagua_4.readFeatures(json_puntosreferenciaRutaagua_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntosreferenciaRutaagua_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntosreferenciaRutaagua_4.addFeatures(features_puntosreferenciaRutaagua_4);
var lyr_puntosreferenciaRutaagua_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntosreferenciaRutaagua_4, 
                style: style_puntosreferenciaRutaagua_4,
                popuplayertitle: 'puntos referencia Ruta agua ',
                interactive: true,
                title: 'puntos referencia Ruta agua '
            });
var format_Puntosdereferenciarutaruido_5 = new ol.format.GeoJSON();
var features_Puntosdereferenciarutaruido_5 = format_Puntosdereferenciarutaruido_5.readFeatures(json_Puntosdereferenciarutaruido_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdereferenciarutaruido_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdereferenciarutaruido_5.addFeatures(features_Puntosdereferenciarutaruido_5);
var lyr_Puntosdereferenciarutaruido_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdereferenciarutaruido_5, 
                style: style_Puntosdereferenciarutaruido_5,
                popuplayertitle: 'Puntos de referencia ruta ruido',
                interactive: true,
                title: 'Puntos de referencia ruta ruido'
            });
var format_PuntosreferenciarutaOlores_6 = new ol.format.GeoJSON();
var features_PuntosreferenciarutaOlores_6 = format_PuntosreferenciarutaOlores_6.readFeatures(json_PuntosreferenciarutaOlores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosreferenciarutaOlores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosreferenciarutaOlores_6.addFeatures(features_PuntosreferenciarutaOlores_6);
var lyr_PuntosreferenciarutaOlores_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosreferenciarutaOlores_6, 
                style: style_PuntosreferenciarutaOlores_6,
                popuplayertitle: 'Puntos referencia ruta Olores',
                interactive: true,
                title: '<img src="styles/legend/PuntosreferenciarutaOlores_6.png" /> Puntos referencia ruta Olores'
            });
var format_PuntosRutaEmisionesAreas_7 = new ol.format.GeoJSON();
var features_PuntosRutaEmisionesAreas_7 = format_PuntosRutaEmisionesAreas_7.readFeatures(json_PuntosRutaEmisionesAreas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosRutaEmisionesAreas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosRutaEmisionesAreas_7.addFeatures(features_PuntosRutaEmisionesAreas_7);
var lyr_PuntosRutaEmisionesAreas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosRutaEmisionesAreas_7, 
                style: style_PuntosRutaEmisionesAreas_7,
                popuplayertitle: 'Puntos Ruta Emisiones Areas',
                interactive: true,
                title: '<img src="styles/legend/PuntosRutaEmisionesAreas_7.png" /> Puntos Ruta Emisiones Areas'
            });
var format_PuntosResiduosSolidos_8 = new ol.format.GeoJSON();
var features_PuntosResiduosSolidos_8 = format_PuntosResiduosSolidos_8.readFeatures(json_PuntosResiduosSolidos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosResiduosSolidos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosResiduosSolidos_8.addFeatures(features_PuntosResiduosSolidos_8);
var lyr_PuntosResiduosSolidos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosResiduosSolidos_8, 
                style: style_PuntosResiduosSolidos_8,
                popuplayertitle: 'Puntos Residuos Solidos ',
                interactive: true,
                title: 'Puntos Residuos Solidos '
            });
var format_PlantaSantaFe_9 = new ol.format.GeoJSON();
var features_PlantaSantaFe_9 = format_PlantaSantaFe_9.readFeatures(json_PlantaSantaFe_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantaSantaFe_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantaSantaFe_9.addFeatures(features_PlantaSantaFe_9);
var lyr_PlantaSantaFe_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantaSantaFe_9, 
                style: style_PlantaSantaFe_9,
                popuplayertitle: 'Planta Santa Fe ',
                interactive: false,
                title: '<img src="styles/legend/PlantaSantaFe_9.png" /> Planta Santa Fe '
            });

lyr_CMPCPlantaSantaFe_0.setVisible(true);lyr_AreasPlantaSantaFe_1.setVisible(true);lyr_CaminatageneralCMPC_2.setVisible(true);lyr_PuntosreferenciaRutaRiles_3.setVisible(true);lyr_puntosreferenciaRutaagua_4.setVisible(true);lyr_Puntosdereferenciarutaruido_5.setVisible(true);lyr_PuntosreferenciarutaOlores_6.setVisible(true);lyr_PuntosRutaEmisionesAreas_7.setVisible(true);lyr_PuntosResiduosSolidos_8.setVisible(true);lyr_PlantaSantaFe_9.setVisible(true);
var layersList = [lyr_CMPCPlantaSantaFe_0,lyr_AreasPlantaSantaFe_1,lyr_CaminatageneralCMPC_2,lyr_PuntosreferenciaRutaRiles_3,lyr_puntosreferenciaRutaagua_4,lyr_Puntosdereferenciarutaruido_5,lyr_PuntosreferenciarutaOlores_6,lyr_PuntosRutaEmisionesAreas_7,lyr_PuntosResiduosSolidos_8,lyr_PlantaSantaFe_9];
lyr_AreasPlantaSantaFe_1.set('fieldAliases', {'fid': 'fid', 'Area ': 'Area ', });
lyr_CaminatageneralCMPC_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_PuntosreferenciaRutaRiles_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Area': 'Area', 'Encargado': 'Encargado', 'Actividad': 'Actividad', 'Aspecto ': 'Aspecto ', 'Check List': 'Check List', 'Opa ': 'Opa ', });
lyr_puntosreferenciaRutaagua_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Encargado': 'Encargado', 'Actividad': 'Actividad', 'Area': 'Area', 'Aspecto ': 'Aspecto ', 'Check List': 'Check List', 'Opa ': 'Opa ', });
lyr_Puntosdereferenciarutaruido_5.set('fieldAliases', {'id': 'id', 'Area ': 'Area ', 'Encargado': 'Encargado', 'Actividad': 'Actividad', 'Aspecto ': 'Aspecto ', 'Nombre ': 'Nombre ', 'Check list': 'Check list', 'Opa': 'Opa', });
lyr_PuntosreferenciarutaOlores_6.set('fieldAliases', {'id': 'id', 'Encargado': 'Encargado', 'Nombre ': 'Nombre ', 'Actividad ': 'Actividad ', 'Check list': 'Check list', 'Opa ': 'Opa ', 'Aspecto ': 'Aspecto ', 'Area ': 'Area ', });
lyr_PuntosRutaEmisionesAreas_7.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Encargado': 'Encargado', 'Actividad': 'Actividad', 'Aspecto ': 'Aspecto ', 'Area ': 'Area ', 'Check list': 'Check list', 'Opa ': 'Opa ', });
lyr_PuntosResiduosSolidos_8.set('fieldAliases', {'fid': 'fid', 'Nombre ': 'Nombre ', 'Longitud ': 'Longitud ', 'Latitud ': 'Latitud ', 'Tipo residuo ': 'Tipo residuo ', 'Responsable': 'Responsable', 'Actividad ': 'Actividad ', 'Check List ': 'Check List ', 'Opa': 'Opa', 'Aspecto ': 'Aspecto ', 'Area ': 'Area ', });
lyr_PlantaSantaFe_9.set('fieldAliases', {'id': 'id', });
lyr_AreasPlantaSantaFe_1.set('fieldImages', {'fid': 'TextEdit', 'Area ': 'TextEdit', });
lyr_CaminatageneralCMPC_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_PuntosreferenciaRutaRiles_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'Encargado': 'TextEdit', 'Actividad': 'ValueMap', 'Aspecto ': 'ValueMap', 'Check List': '', 'Opa ': '', });
lyr_puntosreferenciaRutaagua_4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'ValueMap', 'Encargado': 'ValueMap', 'Actividad': 'ValueMap', 'Area': 'ValueMap', 'Aspecto ': 'ValueMap', 'Check List': 'TextEdit', 'Opa ': 'TextEdit', });
lyr_Puntosdereferenciarutaruido_5.set('fieldImages', {'id': 'TextEdit', 'Area ': 'TextEdit', 'Encargado': 'TextEdit', 'Actividad': 'TextEdit', 'Aspecto ': 'TextEdit', 'Nombre ': 'TextEdit', 'Check list': '', 'Opa': '', });
lyr_PuntosreferenciarutaOlores_6.set('fieldImages', {'id': 'TextEdit', 'Encargado': 'TextEdit', 'Nombre ': 'TextEdit', 'Actividad ': 'TextEdit', 'Check list': 'TextEdit', 'Opa ': 'TextEdit', 'Aspecto ': 'TextEdit', 'Area ': 'TextEdit', });
lyr_PuntosRutaEmisionesAreas_7.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Encargado': 'TextEdit', 'Actividad': 'TextEdit', 'Aspecto ': 'TextEdit', 'Area ': 'TextEdit', 'Check list': 'TextEdit', 'Opa ': 'TextEdit', });
lyr_PuntosResiduosSolidos_8.set('fieldImages', {'fid': 'TextEdit', 'Nombre ': 'TextEdit', 'Longitud ': 'TextEdit', 'Latitud ': 'TextEdit', 'Tipo residuo ': 'TextEdit', 'Responsable': 'TextEdit', 'Actividad ': 'ValueMap', 'Check List ': 'TextEdit', 'Opa': 'TextEdit', 'Aspecto ': 'TextEdit', 'Area ': 'ValueMap', });
lyr_PlantaSantaFe_9.set('fieldImages', {'id': 'TextEdit', });
lyr_AreasPlantaSantaFe_1.set('fieldLabels', {'fid': 'no label', 'Area ': 'no label', });
lyr_CaminatageneralCMPC_2.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_PuntosreferenciaRutaRiles_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'Encargado': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'Aspecto ': 'inline label - always visible', 'Check List': 'no label', 'Opa ': 'no label', });
lyr_puntosreferenciaRutaagua_4.set('fieldLabels', {'id': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Encargado': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'Area': 'inline label - always visible', 'Aspecto ': 'inline label - always visible', 'Check List': 'no label', 'Opa ': 'no label', });
lyr_Puntosdereferenciarutaruido_5.set('fieldLabels', {'id': 'no label', 'Area ': 'no label', 'Encargado': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'Aspecto ': 'no label', 'Nombre ': 'no label', 'Check list': 'no label', 'Opa': 'no label', });
lyr_PuntosreferenciarutaOlores_6.set('fieldLabels', {'id': 'no label', 'Encargado': 'inline label - always visible', 'Nombre ': 'no label', 'Actividad ': 'inline label - always visible', 'Check list': 'no label', 'Opa ': 'no label', 'Aspecto ': 'no label', 'Area ': 'no label', });
lyr_PuntosRutaEmisionesAreas_7.set('fieldLabels', {'id': 'inline label - always visible', 'Nombre': 'no label', 'Encargado': 'header label - always visible', 'Actividad': 'inline label - always visible', 'Aspecto ': 'inline label - always visible', 'Area ': 'inline label - always visible', 'Check list': 'no label', 'Opa ': 'no label', });
lyr_PuntosResiduosSolidos_8.set('fieldLabels', {'fid': 'no label', 'Nombre ': 'inline label - always visible', 'Longitud ': 'hidden field', 'Latitud ': 'hidden field', 'Tipo residuo ': 'inline label - always visible', 'Responsable': 'inline label - always visible', 'Actividad ': 'inline label - always visible', 'Check List ': 'inline label - always visible', 'Opa': 'inline label - always visible', 'Aspecto ': 'inline label - always visible', 'Area ': 'inline label - always visible', });
lyr_PlantaSantaFe_9.set('fieldLabels', {'id': 'no label', });
lyr_PlantaSantaFe_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});