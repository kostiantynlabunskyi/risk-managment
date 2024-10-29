using { riskmanagement as rm } from '../db/schema';

@path: 'service/catalog'
service CatalogService {
    entity Items as projection on rm.Items;

    function getItemsByQuantity(quantity: Integer) returns array of Items;

    action createItem(title: String, quantity: Integer) returns Items;
}
