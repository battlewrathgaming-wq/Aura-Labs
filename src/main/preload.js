const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('aura', {
  listServices: () => ipcRenderer.invoke('aura:service:list'),
  invokeService: (command, payload = {}, options = {}) => ipcRenderer.invoke('aura:service:invoke', {
    command,
    payload,
    ...options
  })
});

contextBridge.exposeInMainWorld('auraWindow', {
  getState: () => ipcRenderer.invoke('aura:window:get-state'),
  setAlwaysOnTop: (enabled) => ipcRenderer.invoke('aura:window:set-always-on-top', enabled === true),
  minimize: () => ipcRenderer.invoke('aura:window:minimize'),
  close: () => ipcRenderer.invoke('aura:window:close')
});

if (process.env.AURA_LAB_PANE_BOARD === '1') {
  contextBridge.exposeInMainWorld('auraPaneBoard', {
    load: () => ipcRenderer.invoke('aura:pane-board:load'),
    revision: () => ipcRenderer.invoke('aura:pane-board:revision'),
    save: (board, reason = 'save') => ipcRenderer.invoke('aura:pane-board:save', { board, reason }),
    snapshot: (request) => ipcRenderer.invoke('aura:pane-board:snapshot', request),
    exportPng: (request = {}) => ipcRenderer.invoke('aura:pane-board:export-png', request),
    capture: (request = {}) => ipcRenderer.invoke('aura:pane-board:capture', request)
  });
}
