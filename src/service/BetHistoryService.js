import { coupons } from "@/service/MockData.js";

export const betHistoryService = {
  getCoupons: function(filter) {
      if (!filter) {
          return coupons;
      }

      return coupons.filter(coupon => {
          if (filter.status && filter.status !== coupon.status) {
              return false;
          }
          if (filter.type && filter.type !== coupon.type) {
              return false;
          }
          if (filter.from && Date.parse(coupon.date) < Date.parse(filter.from)) {
              return false;
          }
          if (filter.to && Date.parse(coupon.date) > Date.parse(filter.to)) {
              return false;
          }
          return true;
      });
  }
};