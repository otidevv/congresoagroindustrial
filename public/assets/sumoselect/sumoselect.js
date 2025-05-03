
$(document).ready(function () {
    $('.selectBox').SumoSelect();
    $('.selectBoxMulti').SumoSelect();
    $('.selectBoxAll').SumoSelect({ selectAll: true });
    $('.selectBoxPlaceholder').SumoSelect({placeholder: 'Choose'});
    $('.selectBoxAllSearch').SumoSelect({search: true, searchText: 'Search...'});
    $('.selectBoxMultiDialog').SumoSelect({okCancelInMulti: true,});
    $('.selectBoxMultiClean').SumoSelect({clearAll: true});
    $('.searchSelectBox').SumoSelect();
});