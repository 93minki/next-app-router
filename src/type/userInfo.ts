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
