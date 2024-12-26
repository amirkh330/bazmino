import { CallApi } from "@/Settings/axiosConfig";
import { GlobalData } from "@/Types/responses/ResponsesTypes";

const getSingleAwardsQueryFn = (
  id: number
): Promise<GlobalData<any>> =>
  CallApi.get(`about_us/awards-and-honors-detail/${id}/get/`);
export default getSingleAwardsQueryFn;
