export interface UserInfoProps {
  userInfo: {
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
    folder: {
      folder1: {
        name: string;
        count: number;
      };
      folder2: {
        name: string;
        count: number;
      };
      folder3: {
        name: string;
        count: number;
      };
    };
    paper: {
      paper1: {
        grade: string;
        title: string;
        created_at: string;
        tag: string;
      };
      paper2: {
        grade: string;
        title: string;
        created_at: string;
        tag: string;
      };
      paper3: {
        grade: string;
        title: string;
        created_at: string;
        tag: string;
      };
    };
  };
}
