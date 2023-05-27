export default class FoodService {
    // Không khai báo thuộc tính thì không cần constructor

    getFoodList = () => {
        return axios({
            method: 'get',
            url: 'https://62e7428c69bd03090f7a48a4.mockapi.io/foods'
        });
    }

    addFood = (food) => {
        return axios({
            method: 'post',
            url: 'https://62e7428c69bd03090f7a48a4.mockapi.io/foods',
            data: food
        });
    }

    getFoodDetail = (id) => {
        return axios({
            method: 'get',
            url: `https://62e7428c69bd03090f7a48a4.mockapi.io/foods/${id}`
        });
    }

    updateFood = (id, food) => {
        return axios({
            method: 'put',
            url: `https://62e7428c69bd03090f7a48a4.mockapi.io/foods/${id}`,
            data: food
        });
    } 
}