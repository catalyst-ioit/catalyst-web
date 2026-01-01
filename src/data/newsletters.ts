export type NewsletterIssue = {
	month: string;
	title: string;
	blurb: string;
	pdf: string;
};

export const newsletterIssues: NewsletterIssue[] = [
	{
		month: 'December 2025',
		title: 'December Issue',
		blurb:
			'Latest drop with project spotlights, behind-the-scenes build notes, and calls to collaborate.',
		pdf: '/newsletter/issues/dec.pdf',
	},
];
