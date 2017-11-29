import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StringTree {

	// if it has children, the value gets ignored.
	// only leaves should have values
	private String value;
	private List<StringTree> children;

	private StringTree(Scanner scan) {
		readFile(scan);
	}

	// if you're not getting the output you expected,
	// try going into the file and replacing all
	// "<" with " <" and ">" with "> "
	// (also make sure there aren't any unexpected instances of < or >)
	public StringTree(String htmlFileName) {
		Scanner scan = null;
		try {

			File x = new File(htmlFileName);
			scan = new Scanner(x);

		} catch (IOException e) {
			e.printStackTrace();
			System.exit(1);
		}
		// discard up to starting tag
		String cur = scan.next();
		while (!(cur.startsWith("<li") || cur.startsWith("<ul"))) {
			cur = scan.next();
		}
		finishTag(cur, scan);

		// actually read
		readFile(scan);
	}

	private void finishTag(String cur, Scanner scan) {
		while (!cur.endsWith(">")) {
			cur = scan.next();
		}
	}

	// pre-condition: we are NOT in the middle of a tag
	private void readFile(Scanner scan) {

		value = "";
		children = new ArrayList<StringTree>();
		while (scan.hasNext()) {
			String next = scan.next();
			// tag processing
			if (next.startsWith("<")) {
				// eat up extra tokens that are part of the same tag
				finishTag(next, scan);
				
				// done with current level
				if (next.startsWith("</li") || next.startsWith("</ul")) {
					// clean up value
					if (children.isEmpty()) {
						value = value.trim();
					} else {
						value = "";
					}
					return;
				} else { // found sub-exp
					if (next.equals("<ul>") || next.startsWith("<li")) {
						children.add(new StringTree(scan));
					}
				}
			} else {
				// non-tag text
				value += " " + next;
			}
		}
	}

	private String toString(String indent) {
		if (children.isEmpty()) {
			return indent + value + "\n";
		} else {
			String str = "";
			for (StringTree child : children) {
				str += child.toString("  " + indent);
			}
			return str;
		}
	}

	public String toString() {
		return toString("- ").trim();
	}

	public static void main(String[] args) {
		String filename = "blah3.txt";
		StringTree st = new StringTree(filename);
		System.out.println(st);
	}
}
