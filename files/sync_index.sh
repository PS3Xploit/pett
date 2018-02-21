#!/bin/bash
#
# Copyright 2018 Caio99BR
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# Warn about missing editreplacematch function
if [ -z "$(type -t editreplacematch 2> /dev/null)" ]; then
  echo '';
  echo ' sync_index.sh: The function "editreplacematch" from android_development_shell_tools is not found, downloading it!';
  echo '';
  source <(curl -Ls https://github.com/AdrianDC/android_development_shell_tools/raw/master/sources/host/edit.rc)
fi;

# === Sync Index Automatically ===
function sync_indexsh()
{
 # Usage: sync_indexsh (Sync all index files with en-US base)

  # Error about missing editreplacematch function
  if [ -z "$(type -t editreplacematch 2> /dev/null)" ]; then
    echo '';
    echo ' sync_indexsh: The function "editreplacematch" from android_development_shell_tools not found it, exiting!';
    echo '';
    return;
  fi;

  # Variable
  local cwd;
  local base_list;
  local lang_list=();
  local lang_list_size;
  local match_code;
  local match_name;
  local match_html;
  local match_css;
  local match_js;
  local to_write_code;
  local to_write_name;
  local to_write_html;
  local to_write_css;
  local to_write_js;

  # Current dir
  cwd=$(pwd);

  # Check if we're inside of files/ dir
  if [ ! -d "${cwd}/index" ]; then
    echo '';
    echo ' sync_indexsh: "index" folder not found, exiting!';
    echo '';
    return;
  fi;

  # Current Language List (Code|Name)
  lang_list=('ar|Arabic' \
             'ca|Spanish (Catalan)' \
             'de-DE|German' \
             'es-ES|Spanish' \
             'es-419|Spanish (Latin American)' \
             'fr-FR|French' \
             'hi|Hindi' \
             'it-IT|Italian' \
             'nl-NL|Dutch' \
             'pl|Polish' \
             'pt-BR|Portuguese (Brazil)' \
             'ru|Russian' \
             'tr|Turkish');

  # Base Language List (Code|Name)
  base_list='en-US|English US';

  # Get current size
  lang_list_size="${#lang_list[@]}";

  # Start working
  for ((i=0; i<lang_list_size; i++)); do
    # Match List
    match_code=$(echo "${base_list}" | cut -d'|' -f1);
    match_name=$(echo "${base_list}" | cut -d'|' -f2);
    match_html="${cwd}/index/${match_code}.html";
    match_css="../css/${match_code}/gui.css";
    match_js="../js/api/lang/${match_code}/messages.js";

    # To Write List
    to_write_code=$(echo "${lang_list[$i]}" | cut -d'|' -f1);
    to_write_name=$(echo "${lang_list[$i]}" | cut -d'|' -f2);
    to_write_html="${cwd}/index/${to_write_code}.html";
    to_write_css="../css/${to_write_code}/gui.css";
    to_write_js="../js/api/lang/${to_write_code}/messages.js";

    # Delete old file
    rm -rf "${to_write_html}";

    # Copy new file
    cp "${match_html}" "${to_write_html}";

    # Replace 'match' with 'to_write'
    editreplacematch "${match_css}" "${to_write_css}" "${to_write_html}";
    editreplacematch "${match_js}" "${to_write_js}" "${to_write_html}";
    editreplacematch "${match_name}" "${to_write_name}" "${to_write_html}";
  done;
}

# Run the command
sync_indexsh;
