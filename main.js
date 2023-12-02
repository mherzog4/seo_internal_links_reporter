import { crawlPage } from './src/crawler.js';
import { sortPages, printReport } from './src/report.js';


async function main() {
  if (process.argv.length < 3) {
    console.log('no website provided');
  }
  if (process.argv.length > 3) {
    console.log('too many arguments provided');
  }
  const baseURL = process.argv[2];
  console.log(`crawling ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});
  console.log(pages);
  const sortedPages = await sortPages(baseURL, baseURL, pages);
  console.log(sortedPages);

  printReport(sortedPages);
  

}

main();
