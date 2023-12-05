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

# redone to prep for Roblox

class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        res = []
        subdomain_freq = {}

        for cpdomain in cpdomains:
            count, domains = cpdomain.split(" ")

            subdomains = domains.split(".")
            while len(subdomains) > 0:
                subdomain = ".".join(subdomains)

                if subdomain not in subdomain_freq:
                    subdomain_freq[subdomain] = int(count)
                else:
                    subdomain_freq[subdomain] += int(count)

                del subdomains[0]

        entries = list(subdomain_freq.items())

        for entry in entries:
            res.append(f"{entry[1]} {entry[0]}")

        return res
