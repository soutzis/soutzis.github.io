---
layout: page
title: Projects
subtitle: Selected work, tools and write-ups — within the limits of client confidentiality.
permalink: /projects/
description: Selected cyber security projects, open-source tools and research by Petros Soutzis.
---

Every single project is covered by an NDA, so what you see here is the
shareable part: public code, blog posts, and sanitised examples of the
kinds of problems we help our clients solve. For references on engagements, [get in touch]({{ '/' | relative_url }}#contact).

## Projects

We mostly use GitHub for our projects and published tools (not exclusively security-related):

- **[github.com/soutzis]({{ site.links.github }})** — personal repositories, scripts and contributions.

## Engagement examples

These are representative of the work we deliver. *(Details are generalised to
protect client confidentiality)*.

### Web application penetration test #health-insurance-platform
End-to-end assessment of the core platform of this customer: We were able to 
identify an authorisation flaw, which ultimately allowed us to gain administrative
access to the application. Additionally, we were able to pinpoint several weaknesses
to the backend API and some best-practices antipatterns. Our team delivered a
risk-prioritised report and worked with the engineering team through remediation and retest.

### Web application penetration test #fintech-org
The team at `cyber-security.com.cy` was tasked with assessing the solution of a fintech company
that lets its users take out small loans with low interest rates or invest by loaning funds to others.
While this application was very well-designed in terms of security, our proprietary attack surface mapping solution
uncovered multiple API endpoints that were publicly exposed. Our team painstakingly went through each one of the API
calls and we were able to discover three (3) unused calls that were vulnerable to SQL injection, giving us
*read* access to all the production databases.

### Social engineering assessment #banking-client
Multi-channel social engineering campaign (phishing and vishing) measuring detection and response
across staff and the SOC. We worked with the relevant team at the CISO's office to prepare
a realistic pretext, using delivery techniques that let us evade this organisation's automated
detection mechanisms.

---

Want to talk about a specific challenge? [Email us]({{ 'mailto:' | append: site.links.email }})
or [connect on LinkedIn]({{ site.links.linkedin }}).
