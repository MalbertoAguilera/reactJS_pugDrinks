import stock from './../db/stock.json';

const getItems = () => {
      
      return new Promise ((resolve, reject) => {
            setTimeout(() => {
                  resolve(stock);     
            }, 2000);
      });
}

export default getItems;