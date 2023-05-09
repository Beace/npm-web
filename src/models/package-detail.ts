import { handleEffect, model } from '@modern-js/runtime/model';

type State = {
  packageInfo: Record<string, any>;
  pending: boolean;
  error: null | Error;
  files: any[];
};

export default model<State>('packageDetail').define({
  state: {
    packageInfo: {},
    pending: false,
    error: null,
    files: [],
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
    loadReadMe: handleEffect({ result: 'files' }),
  },
  effects: {
    async load(name: string) {
      const data = await fetch(`https://registry.npmmirror.com/${name}`).then(
        res => res.json(),
      );
      return data;
    },

    async loadReadMe(name: string, version = 'latest') {
      const data = await fetch(
        `https://registry.npmmirror.com/${name}/${version}/files/`,
      ).then(res => res.json());
      return data?.files;
    },
  },
});
