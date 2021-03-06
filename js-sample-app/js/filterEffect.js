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

/*
  Use slider thumb values to apply filter and effect to the feature layer. This allows you
  to only display features who's attributes that match a WHERE clause. 
  References:
  * Documentation: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html#effect
  * Sample app: https://developers.arcgis.com/javascript/latest/sample-code/featurefilter-attributes/index.html 
*/

const filterEffect = (sliderThumbValue, view, featureLayer, attribute, promiseUtils) => {

  // Debounce to minimize the number of times the filter and effect gets applied as the user moves the slider
  const debounce = promiseUtils.debounce((sliderThumbValue) => {

    // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#whenLayerView
    view.whenLayerView(featureLayer).then((layerView) => {;
      const whereClause = attribute + "<'" + (sliderThumbValue[1] / 100) + "' AND " + attribute + ">'" + (sliderThumbValue[0] / 100) + "'";
      const filter = {
        where: whereClause,
      };

      layerView.effect = {
        filter: filter,
        excludedEffect: "grayscale(100%) opacity(40%)"
      }
    });
  });  

  debounce(sliderThumbValue);  
}

export {
  filterEffect 
}