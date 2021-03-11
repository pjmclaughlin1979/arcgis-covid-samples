/*
  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/

const layerUrl = "https://services.arcgis.com/qHLhLQrcvEnxjtPr/arcgis/rest/services/Health_2011/FeatureServer/4";
const vectorTileLayerID = "1932e7d4432d45dabc0d4d13109c1f09"; // ArcGIS Online Portal ID
const defaultSliderValues = [-100,40]; // min, max
const defaultQueryAttribute = "Qual_P1"; // attribute from feature service
const defaultFeatureLayerOutfields = ["name", "code", "Qual_P2", "Qual_P2", "Qual_P3", "Qual_P4", "Qual_P5"];
const defaultChartBarColors = ["#004da8", "#73b2ff", "#ffebaf", "#ffaa00", "#ff3b00"]; // one color for each bar in the chart.

export {
  layerUrl, defaultSliderValues, defaultQueryAttribute, defaultFeatureLayerOutfields, vectorTileLayerID, defaultChartBarColors
}
