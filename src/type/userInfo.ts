export interface UserInfoProps {
  name: string;
  subscription: string;
  point: number;
  coupon: number;
  notice: {
    coupon: {
      type: string;
      title: string;
    };
    subscription: {
      type: string;
      title: string;
    };
    present: {
      type: string;
      title: string;
    };
  };
  folder: [
    {
      name: string;
      count: number;
    },
    {
      name: string;
      count: number;
    },
    {
      name: string;
      count: number;
    }
  ];
  paper: [
    {
      grade: string;
      title: string;
      created_at: string;
      tag: string;
    },
    {
      grade: string;
      title: string;
      created_at: string;
      tag: string;
    },
    {
      grade: string;
      title: string;
      created_at: string;
      tag: string;
    }
  ];
}

export interface LoginResponse {
  jwt: string;
  user: UserInfo;
}
export interface UserInfo {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  point: string;
  subscription: string;
  coupon: number;
  notice: Notice;
}

export interface Notice {
  coupon: Coupon;
  subscription: Coupon;
  present: Coupon;
}

export interface Coupon {
  type: string;
  title: string;
}
