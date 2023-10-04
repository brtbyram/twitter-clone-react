import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "brtbyram",
    fullName: "Berat Murathan",
    avatar:
      "https://pbs.twimg.com/profile_images/1034109845014765571/yKhka-ZM_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "brtbyram",
      fullName: "Berat Murathan",
      avatar:
        "https://pbs.twimg.com/profile_images/1034109845014765571/yKhka-ZM_400x400.jpg",
    },
    {
      id: 2,
      userName: "ogzhnbyram",
      fullName: "Oğuzhan Bayram",
      avatar:
        "https://media.licdn.com/dms/image/C4D03AQHbNhg_1hcRLw/profile-displayphoto-shrink_800_800/0/1594146501604?e=2147483647&v=beta&t=vba1tS4Ffuk642gLLpEHKq2focR-K4yVPVJ6Hv2Yaag",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //state manipule etme metodları
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
