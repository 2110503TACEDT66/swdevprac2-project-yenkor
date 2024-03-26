interface CarItem {
  _id: string;
  name: string;
  address: string;
  telephone: string;
  price: number;
}

interface CarJson {
  success: boolean;
  count: number;
  data: CarItem[];
}

type CarJsonPromise = Promise<CarJson>;

type CarProps = {
  _id: string;
  src: string;
  name: string;
  telephone: string;
  price: number;
  address: string;
};

type createUserProps = {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPhone: string;
  userLocation: string;
  balance: number;
};
