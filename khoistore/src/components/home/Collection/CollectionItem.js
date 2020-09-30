import React from 'react';
export default function CollectionItem() {
  return (
       <div className="Collection-item">
          <div className="Collection-item_introduce"> 
                <div className="Collection-item_introduce__name">
                  <span className="Collection-item_introduce__name___title">Product Name :</span>
                  <span className="Collection-item_introduce__name___content"> Collection 1</span>
                </div>
                <div className="Collection-item_introduce__material">
                  <span className="Collection-item_introduce__material___title">Product Material :</span>
                  <span className="Collection-item_introduce__material___content"> Cotton 100% </span>
                </div>
                <div className="Collection-item_introduce__price">
                  <span className="Collection-item_introduce__price___title">Product Price :</span>
                  <span className="Collection-item_introduce__price___content"> 500.000 </span>
                </div>
           </div>
       </div> 
  );
}
 

