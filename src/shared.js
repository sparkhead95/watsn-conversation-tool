/**
 * Copyright (c) 2017 Ali Lokhandwala <ali@huestones.co.uk>. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const util = require('util');
const path = require('path');
const fs = require('fs');

exports.loadWorkspace = loadWorkspace;

//--

function loadWorkspace(file) {
  var normalizedPath = path.join(process.cwd(), file);
  var stat = fs.statSync(normalizedPath);

  if (!normalizedPath.match(/\.json/i) && stat.isFile()) {
    throw new Error(
      util.format('Unexpected extension, workspace file must be JSON, %s \'%s\'',
        loadWorkspace.name,
        normalizedPath)
    );
  }

  return require(normalizedPath);
}
