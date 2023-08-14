/*
A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.

For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.

Example 1:

Input: cpdomains = ["9001 discuss.leetcode.com"]
Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
Explanation: We only have one website domain: "discuss.leetcode.com".
As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

Example 2:

Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
Explanation: We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.
*/

/*
time: O(mxn) where m is the number of domains and n is the number of subdomains of each domain

1.) use an object to hold each subdomain count
2.) iterate over the cpdomains and split them into the useful data
3.) each domain needs to have its subdomains extracted, itertate over them split and join corresponding slices to do so
4.) iterate over each subdomain and update its count in the object (increment or set if not in there already)
5.) extract the entries from the object once its filled out
6.) rearrange each entry into a new cpsubdomain string and push it into res
7.) return res
*/

var subdomainVisits = function(cpdomains) {
    let res = [];

    // make an object to hold the counts for each subdomain
    let subDomCount = {};

    // iterate over the count-paired domains and split each into subdomains
    for (let cpdomain of cpdomains) {
        // split each cpdomain into its useful parts
        let arr = cpdomain.split(" ");
        let count = arr[0];
        let domain = arr[1];

        // get each subdomain by iterating through the domain
        let domainCmpnts = domain.split(".");
        let subdomains = [];
        for (let i = 0; i < domainCmpnts.length; i++) {
            let subdomain = domainCmpnts.slice(i).join(".");
            subdomains.push(subdomain);
        }

        // iterate over subdomains and update their counts accordingly
        for (let subdomain of subdomains) {
            if (subDomCount[subdomain]) {
                subDomCount[subdomain] += parseInt(count);
            } else {
                subDomCount[subdomain] = parseInt(count);
            }
        }
    }

    // convert the object to strings to push into the res array
    let entries = Object.entries(subDomCount);
    for (let entry of entries) {
        let cpsubdomain = entry[1] + " " + entry[0];
        res.push(cpsubdomain);
    }

    return res;
};
