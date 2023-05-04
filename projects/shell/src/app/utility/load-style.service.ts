export function loadOtherStyles(url: any): Promise<void> {
  return new Promise(resolve => {
    const baseUrl = url;
    const el = document.getElementById('style-v2');

    // Load one instance, do it like this to handle errors and retrying
    if (el) {
      el.remove();
    }
    const headEl = document.getElementsByTagName('head')[0];
    const styleLinkEl = document.createElement('link');
    styleLinkEl.rel = 'stylesheet';
    styleLinkEl.id = 'style-v2';
    styleLinkEl.href = `${baseUrl}/styles-v2-bundle.css`;
    headEl.appendChild(styleLinkEl);
    resolve();
  });
}
