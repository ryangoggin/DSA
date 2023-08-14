# see js file for thought process, switched inner for loop to while loop for efficiency

class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        res = []
        subDomCount = {}

        for cpdomain in cpdomains:
            [count, domain] = cpdomain.split(" ")

            subdomains = domain.split(".")

            while len(subdomains) > 0:
                subdomain = ".".join(subdomains)

                if subdomain in subDomCount:
                    subDomCount[subdomain] += int(count)
                else:
                    subDomCount[subdomain] = int(count)

                del subdomains[0]

        entries = subDomCount.items()
        for entry in entries:
            res.append(str(entry[1]) + " " + entry[0])

        return res
