function flagListItemsIfSaved(matchList, savedList) {
  let changed = false;

  function flagItem(item, saved) {
    changed = true;
    return Object.assign({}, item, {
      data: Object.assign({}, item, { saved }),
    });
  }

  if (savedList && savedList.items) {
    const outList = Object.assign({}, matchList, {
      items: matchList.items.map(matchItem => {
        if (!!savedList.items.find(savedItem => savedItem.data.id == matchItem.data.id)) {
          if (!matchItem.data.saved) {
            flagItem(matchItem, true);
          }
        }
        else if (matchItem.data.saved) {
          // Was saved, is not anymore
          flagItem(matchItem, false);
        }

        // Return unchanged if reached
        return matchItem;
      }),
    });

    // Return copy if changed or original if unchanged
    return changed ? outList : matchList;
  }
  else {
    // No saved list exists, return unchanged
    return matchList;
  }
}