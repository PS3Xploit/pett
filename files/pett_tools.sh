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
function pett_index_sync()
{
 # Usage: pett_index_sync (Sync all index files based in en-US)

  # Error about missing editreplacematch function
  if [ -z "$(type -t editreplacematch 2> /dev/null)" ]; then
    echo '';
    echo ' pett_index_sync: The function "editreplacematch" from android_development_shell_tools not found it, exiting!';
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
  local exp_remove_barrier;
  local exp_remove_useless;

  # Experimental
  exp_remove_barrier='!Experimental!';
  exp_remove_useless='<script src="../js/api/lang/en-US/messages.js"></script>';

  # Current dir
  cwd=$(pwd);

  # Check if we're inside of files/ dir
  if [ ! -d "${cwd}/index" ]; then
    echo '';
    echo ' pett_index_sync: "index" folder not found, exiting!';
    echo '';
    return;
  fi;

  # Current Language List (Code|Name)
  lang_list=('ar|Arabic' \
             'ca|Spanish (Catalan)' \
             'de-DE|German' \
             'en-US_exp|English US (Experimental)' \
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

    # Experimental
    if [[ "${to_write_code}" == 'en-US_exp' ]]; then
      editremovelines "${exp_remove_barrier}" "${to_write_html}";
      editremovelines "${exp_remove_useless}" "${to_write_html}";
      editreplacematch "${match_name}" "${to_write_name}" "${to_write_html}";

    # Replace 'match' with 'to_write'
    else
      editreplacematch "${match_css}" "${to_write_css}" "${to_write_html}";
      editreplacematch "${match_js}" "${to_write_js}" "${to_write_html}";
      editreplacematch "${match_name}" "${to_write_name}" "${to_write_html}";
    fi;
  done;
}

# === Check Lang File Automatically ===
function pett_lang_check()
{
 # Usage: pett_lang_check (Check all lang files for missing variables based on en-US)

  # Error about missing editreplacematch function
  if [ -z "$(type -t editreplacematch 2> /dev/null)" ]; then
    echo '';
    echo ' pett_lang_check: The function "editreplacematch" from android_development_shell_tools not found it, exiting!';
    echo '';
    return;
  fi;

  # Variable
  local base_file;
  local check_file;
  local cwd;
  local base_list;
  local lang_list=();
  local lang_list_size;
  local temp_search;
  local tmp_file;
  export PETT_LAST_LINE;

  # Current dir
  cwd=$(pwd);

  # Temporary file
  tmp_file=$(mktemp);

  # Check if we're inside of files/ dir
  if [ ! -d "${cwd}/index" ]; then
    echo '';
    echo ' sync_indexsh: "index" folder not found, exiting!';
    echo '';
    return;
  fi;

  # Current Language List (Code|Name)
  lang_list=('ar' \
             'ca' \
             'de-DE' \
             'es-ES' \
             'es-419' \
             'fr-FR' \
             'hi' \
             'it-IT' \
             'nl-NL' \
             'pl' \
             'pt-BR' \
             'ru' \
             'tr');

  # Base Language List (Code|Name)
  base_list='en-US';

  # Get current size
  lang_list_size="${#lang_list[@]}";

  # Start working
  for ((i=0; i<lang_list_size; i++)); do
    # Match List
    base_file="js/api/lang/${base_list}/messages.js";

    # To Write List
    check_file="js/api/lang/${lang_list[$i]}/messages.js";

    # Remove comments
    grep -v '//' "${base_file}" > "${tmp_file}";

    # show what file is now being checked
    echo -e "\nParsing file ${lang_list[$i]}";

    # Check for the strings on a entire file
    while read line_search; do

      # Parser variable
      temp_search=$(echo "${line_search}" | cut -d' ' -f2 | cut -d'=' -f1)

      # Move cursor back to begin
      echo -ne "\r\033[K  ${temp_search}"

      # Check if line from en-US is on file to check
      grep -q "${temp_search}" "${check_file}";

      # Output the message of not found string
      if [[ "${?}" != '0' ]]; then

        # Show message of not found string
        echo -ne "\n\033[0;31m    String '${temp_search}' not found! Adding it...\n    If new string have any '\' fix it manually! \033[0m\n";

        # Insert new variable below
        # TODO: Fix escaping of '\n', currently it remove the '\'
        editinsertbelow "${PETT_LAST_LINE}" "${line_search}" "${check_file}";
      fi

      # Export to be used later
      export PETT_LAST_LINE="${temp_search}";
    done < "${tmp_file}";

    echo;
  done;
}

# Show new commands available
echo;
if [ ! -z "$(type -t pett_lang_check 2> /dev/null)" ]; then
  echo "'pett_lang_check' is now available!";
fi;
if [ ! -z "$(type -t pett_index_sync 2> /dev/null)" ]; then
  echo "'pett_index_sync' is now available!";
fi;
echo;
