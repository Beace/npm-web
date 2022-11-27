import { model } from '@modern-js/runtime/model';

type State = {
  packageInfo: Record<string, any>;
  pending: boolean;
  error: null | Error;
};

export default model<State>('packageDetail').define({
  state: {
    packageInfo: {},
    pending: false,
    error: null,
  },
  actions: {
    load: {
      pending(draft) {
        draft.pending = true;
      },
      rejected(draft, payload) {
        draft.pending = false;
        draft.error = payload;
      },
      fulfilled(draft, p) {
        draft.packageInfo = p;
      },
    },
  },
  effects: {
    async load() {
      const data = await fetch('https://registry.npmmirror.com/lodash').then(
        res => res.json(),
      );
      return data;
    },
  },
});
